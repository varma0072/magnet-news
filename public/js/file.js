

fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=16ca4ac8ea1245d4a4fe00aa992b0dbb').then((response)=>{
    return response.json()
}).then((data)=>{
    //block 1......
    document.getElementById('block1t').innerHTML = data.articles[0].title
    document.getElementById('block1i').src= data.articles[0].urlToImage
    document.getElementById('block1u').href = data.articles[0].url
    document.getElementById('block1u1').href = data.articles[0].url

    //block2.......
    document.getElementById('block2t').innerHTML = data.articles[1].title
    document.getElementById('block2i').src= data.articles[1].urlToImage
    document.getElementById('block2u').href = data.articles[1].url
    document.getElementById('block2u1').href = data.articles[1].url

    //block3.......
    document.getElementById('block3t').innerHTML = data.articles[2].title
    document.getElementById('block3i').src= data.articles[2].urlToImage
    document.getElementById('block3u').href = data.articles[2].url
    document.getElementById('block3u1').href = data.articles[2].url

    //block4.......
    document.getElementById('block4t').innerHTML = data.articles[3].title
    document.getElementById('block4i').src= data.articles[3].urlToImage
    document.getElementById('block4u').href = data.articles[3].url
    document.getElementById('block4u1').href = data.articles[3].url

    //block5........
    document.getElementById('block5t').innerHTML = data.articles[4].title
    document.getElementById('block5i').src= data.articles[4].urlToImage
    document.getElementById('block5u').href = data.articles[4].url
    document.getElementById('block5u1').href = data.articles[4].url

    //block6........
    document.getElementById('block6t').innerHTML = data.articles[5].title
    document.getElementById('block6i').src= data.articles[5].urlToImage
    document.getElementById('block6u').href = data.articles[5].url
    document.getElementById('block6u1').href = data.articles[5].url
    
    //block7.........
    document.getElementById('block7t').innerHTML = data.articles[6].title
    document.getElementById('block7i').src= data.articles[6].urlToImage
    document.getElementById('block7u').href = data.articles[6].url
    document.getElementById('block7u1').href = data.articles[6].url

    //block8.........
    document.getElementById('block8t').innerHTML = data.articles[7].title
    document.getElementById('block8i').src= data.articles[7].urlToImage
    document.getElementById('block8u').href = data.articles[7].url
    document.getElementById('block8u1').href = data.articles[7].url

    //block9........
    document.getElementById('block9t').innerHTML = data.articles[8].title
    document.getElementById('block9i').src= data.articles[8].urlToImage
    document.getElementById('block9u').href = data.articles[8].url
    document.getElementById('block9u1').href = data.articles[8].url

    //block10.......
    document.getElementById('block10t').innerHTML = data.articles[9].title
    document.getElementById('block10i').src= data.articles[9].urlToImage
    document.getElementById('block10u').href = data.articles[9].url
    document.getElementById('block10u1').href = data.articles[9].url

    //block11.......
    document.getElementById('block11t').innerHTML = data.articles[10].title
    document.getElementById('block11i').src= data.articles[10].urlToImage
    document.getElementById('block11u').href = data.articles[10].url
    document.getElementById('block11u1').href = data.articles[10].url

    //block12......
    document.getElementById('block12t').innerHTML = data.articles[11].title
    document.getElementById('block12i').src= data.articles[11].urlToImage
    document.getElementById('block12u').href = data.articles[11].url
    document.getElementById('block12u1').href = data.articles[11].url


}).catch((e)=>{console.log(e)})

