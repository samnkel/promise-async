function fetchUserData(userId){
return new Promise((resolve, reject) => {
    setTimeout(() => {
        if(userId > 0 ) {
            const userData = {
            ID : `userId`,
           NAME: `sam`,
           email: `sam@gmail.com`,
            };
            resolve(userData);
        }else {
            reject(error);
            
        }
    }, 1500);
})
}
fetchUserData(1)
  .then((user)=>{
    console.log(user)
  })
  .catch((error)=> {
    console.log(error)
  })


function fetchUserPost(userid){
return new Promise((resolve, reject) => {
    setTimeout(() => {
        const userPost = [
      `ID: ${userid}, Tittle: First post, content:I love learning java script`,
      `ID:${userid}, Tittle: second post, content:I love learning java script`,
      `ID:${userid}, Tittle: third post, content:I love learning java script`,]
        
      if(userid >= 110|| userid<=112 ) {
            resolve(userPost);
        }else {
            reject('error');
            
        }
    }, 1000);
})
}
fetchUserPost(110)
  .then((Post)=>{
    console.log(Post[0])
  }) .catch((error)=> {
    console.log(error)
  })
  
fetchUserPost(111)
  .then((Post)=>{
    console.log(Post[1])
  }) .catch((error)=> {
    console.log(error)
  })

fetchUserPost(112)
  .then((Post)=>{
    console.log(Post[2])
  }) .catch((error)=> {
    console.log(error)
  })
  
    
function fetchUserDataAndPost(id){
return new Promise((resolve, reject) => {
    setTimeout(() => {
          const userDataandPost = [
            `ID : userId`,
          `NAME: sam`,
           `email: sam@gmail.com`, 
      `ID: 110 Tittle: the post, content:I love learning java script`,
      
]
        
      if(id === 110 ) {
            resolve(userDataandPost);
        }else {
            reject('error');
            
        }
    }, 2000);
})
}

fetchUserDataAndPost(110)
  .then((DataPost)=>{
    console.log(DataPost)
  }) .catch((error)=> {
    console.log(error)
  })

  async function fetchUserDataAndPosts(id) {
  try {
    const fetchUserDataAndPosts = await fetch(id);
    if (id === !number) {
      throw new Error(error);
    }
  } catch (error) {
    console.error( error.message);
  } finally {
    console.log(' completed.');
  }
  }
  fetchUserDataAndPost(110)
  .then((data)=>{
    console.log(data[1,2,3])
  }) .catch((error)=> {
    console.log(error)
  })

async function fetchUsersAndPostsParallel() {
  try {
    
    const userData = 'https://jsonplaceholder.typicode.com/users'; 
    const userPost = 'https://jsonplaceholder.typicode.com/posts'; 

    const [usersResponse, postsResponse] = await Promise.all([
      fetch(userData),
      fetch(userPost)
    ]);

    
    if (!usersResponse.ok) {
      throw new Error(`Failed to fetch users: ${usersResponse.statusText}`);
    }
    if (!postsResponse.ok) {
      throw new Error(`Failed to fetch posts: ${postsResponse.statusText}`);
    }

    
    const users = await usersResponse.json();
    const posts = await postsResponse.json();

    
    const usersWithPosts = users.map(user => ({
      ...user,
      posts: posts.filter(post => post.userId === user.id)
    }));

    return usersWithPosts;

  } catch (error) {
    console.error('Error fetching users and posts:', error);
    throw error; 
  }
}
fetchUsersAndPostsParallel()
  .then(data => {
    console.log('Users with their posts:', data);
  })
  .catch(error => {
    console.error('Failed to get users and posts:', error);
  });