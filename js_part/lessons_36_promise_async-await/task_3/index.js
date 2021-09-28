const getUsersBlogs = async arr => {
  const mainLink = `https://api.github.com/users`;
  try {
    const usersArray = userId =>
      fetch(`${mainLink}/${userId}`)
        .then(response => response.json())
        .catch(error => {
          throw new Error(error.text);
        });

    const users = await Promise.all(arr.map(arrElem => usersArray(arrElem)));
    const getLinks = users.map(url => url.blog);
    return getLinks;
  } catch (error) {
    throw new Error(error.text);
  }
};

getUsersBlogs(['instagram', 'facebook', 'SaraFilin']).then(linksList => console.log(linksList));
