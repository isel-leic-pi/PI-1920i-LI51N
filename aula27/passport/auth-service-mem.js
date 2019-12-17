module.exports = function() {
    let currentUser;
  
    return {
      authenticate: authenticate,
      getUser: getUser,
      logout: logout,
    }
  
    async function authenticate(username, pass) {
      return currentUser = {
        id: 1,
        username
      }
    }
  
    async function getUser(userId) {
      return currentUser
    }
  
    async function logout(userId) {
      currentUser = undefined
    }
}