// write your code here
fetch("http://localhost:3000/images/")
  .then((res) => res.json())
  .then((image) => {
    console.log("Inside GET Fetch: ", image);

    // Do something with product

  });
 

  const images = [
    {
      id: 1,
      title: "Coder dog",
      likes: 7,
      image: "./assets/coder-dog.png",
      comments: [
        {
          id: 1,
          content: "What a cute dog!",
          imageId: 1
        },
        {
          imageId: 1,
          content: "Funny dog!!",
          id: 4
        },
        {
          imageId: 1,
          content: "Hes a good boy!!",
          id: 5
        }
      ]
    }
  ];
  
  console.log("An image object to work with: ", images[0])



const ulel = document.querySelector(".image-container")

function renderCard(images) {
    let postedCard = {}
    console.log("inside loop")
    for (let i = 0; i < images.length; i++) {
        const image = images[i];
    }
    return postedCard
}

renderCard