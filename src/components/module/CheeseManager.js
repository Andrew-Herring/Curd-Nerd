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

  getYoung: {
    value: (resource, credentials) => {
      return fetch(`${cheeseBank}/${resource}?age=1&age=2&age=3&age=4`)
      .then(result => result.json())
    }
  },

  getMidRange: {
    value: (resource, credentials) => {
      return fetch(`${cheeseBank}/${resource}?age=5&age=6&age=7&age=8&age=9`)
      .then(result => result.json())
    }
  },
  getOldRange: {
    value: (resource, credentials) => {
      return fetch(`${cheeseBank}/${resource}?age=10&age=11&age=12&age=15&age=24`)
      .then(result => result.json())
    }
  },
  getWildCard: {
    value: (resource, credentials) => {
      return fetch(`${cheeseBank}/${resource}?wildcard=true`)
      .then(result => result.json())
    }
  },


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

getSoft: {
  value: function(resource) {
    return this.getYoung(resource)
    .then(cheeses => {
      return cheeses.map(cheeses => {
        return {
          key: cheeses.name.id,
          text: `${cheeses.name}`,
          value: `${cheeses.id}`
        };
      });
    })
  }
},
  getMid: {
  value: function(resource) {
    return this.getMidRange(resource)
    .then(cheeses => {
      return cheeses.map(cheeses => {
        return {
          key: cheeses.name.id,
          text: `${cheeses.name}`,
          value: `${cheeses.id}`
        };
      });
    })
  }
},
  getOld: {
  value: function(resource) {
    return this.getOldRange(resource)
    .then(cheeses => {
      return cheeses.map(cheeses => {
        return {
          id: cheeses.name.id,
          key: cheeses.name.id,
          text: `${cheeses.name}`,
          value: `${cheeses.id}`
        };
      });
    })
  }
},

  getWild: {
  value: function(resource) {
    return this.getWildCard(resource)
    .then(cheeses => {
      return cheeses.map(cheeses => {
        return {
          id: cheeses.name.id,
          key: cheeses.name.id,
          text: `${cheeses.name}`,
          value: `${cheeses.id}`
        };
      });
    })
  }
},

  getCheese: {
  value: function(resource) {
    return this.getAll(resource)
       .then(cheeses => {
         return cheeses.map(cheeses => {
           return {
             id: cheeses.name.id,
             key: cheeses.name.id,
             text: `${cheeses.name}`,
             value: `${cheeses.id}`
           };
         });
       });
   }
 }
})
  
