// write your code here
fetch("http://localhost:3000/images")
  .then((res) => res.json())
  .then((images) => {
    console.log("Inside GET Fetch: ", images);

    const data = images
    // Do something with product
    console.log("data: ", data)

    renderImageCard(images)
  });
  
  // console.log("An image object to work with: ", images)


const imageSectionEl = document.querySelector(".image-container")


// function renderImagesList(images) {

// }

function renderImageCard(imageData) {
  console.log("inside render image", imageData)

  for (let i = 0; i < imageData.length; i++) {
    const data = imageData[i];

    console.log("inside image data", data)
    const articleEl = document.createElement("article")
    imageSectionEl.append(articleEl)
    articleEl.classList.add("image-card")

    const h2El = document.createElement("h2")
    articleEl.append(h2El)
    h2El.innerText = data.title
    h2El.classList.add("title")
    
    const imageEl = document.createElement("img")
    articleEl.append(imageEl)
    imageEl.setAttribute("src", data.image)
    imageEl.classList.add("image")

    const divEl = document.createElement("div")
    articleEl.append(divEl)
    divEl.classList.add("likes-section")

    const spanEl = document.createElement("span")
    divEl.append(spanEl)
    spanEl.classList.add("likes")
    spanEl.innerText = data.likes

    const likeButtonEl = document.createElement("button")
    divEl.append(likeButtonEl)
    likeButtonEl.classList.add("like-button")
    likeButtonEl.innerText = "♥"

    likeButtonEl.addEventListener("click", () => {
      console.log("clicked! ", data.id, data.likes)
    
      // You need access to the "id" and the current "likes" of an image/post
    
      // Write our fetch request in here...
      fetch(`http://localhost:3000/images/${data.id}`, {
      method: 'PATCH',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ likes: 3 })
    })
    })


    const ulEl = document.createElement("ul")
    articleEl.append(ulEl)
    ulEl.classList.add("comments")

    data.comments.forEach(comment => {
      console.log("inside comment", comment)
      const liCommentEl = document.createElement("li")
      ulEl.append(liCommentEl)
      liCommentEl.innerText = comment.content
    });
  }
}
