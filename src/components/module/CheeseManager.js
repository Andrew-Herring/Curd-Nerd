const cheeseBank = "http://localhost:4001"

export default  Object.create(null, {
  get: {
    value: (resource, id) => {
      return fetch(`${cheeseBank}/${resource}/${id}`)
        .then(result => result.json())
    }
  },

  getAll: {
    value: (resource) => {
      return fetch(`${cheeseBank}/${resource}`)
        .then(result => result.json())
    }
  },
  getAllByUser: {
    value: (resource, credentials) => {
      return fetch(`${cheeseBank}/${resource}?userId=${credentials}`)
        .then(result => result.json())
    }
  },
  // getAllfilter: {
  //     value: (resource, userId) => {
  //         return fetch(`${cheeseBank}/${resource}/${}`)
  //         .then(result => result.json())
  //     }
  // },
  delete: {
    value: (resource, id) => {
      return fetch(`${cheeseBank}/${resource}/${id}`, {
        method: "DELETE"
      }).then(result => result.json())
    }
  },
  add: {
    value: (resource, item) => {
      return fetch(`${cheeseBank}/${resource}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(item)
      })
        .then(result => result.json())
    }
  },
  edit: {
    value: (resource, id, item) => {
      return fetch(`${cheeseBank}/${resource}/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(item)
      })
        .then(result => result.json())
    }
  },
  getSearch: {
    value: function(resource, query) {
      return fetch(`${cheeseBank}/${resource}?q=${query}`).then(e => e.json())
    }
  },
  searchNP: {
    value: function(username, password) {
      return fetch(
        `${cheeseBank}/users?username=${username}&password=${password}`
      ).then(e => e.json())
    }
  },
  searchUsername: {
    value: function(username) {
      return fetch(`${cheeseBank}/users?username=${username}`).then(e =>
        e.json()
      )
    }
  },


getCheese: {
  value: function(resource) {
    return this.getAll(resource)
       .then(cheeses => {
         return cheeses.map(cheeses => {
           return {
             key: cheeses.name.id,
             text: `${cheeses.name}`,
             value: `${cheeses.id}`
           };
         });
       });
   }
 }
})
  
