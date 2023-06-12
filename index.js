const gifUrl = "https://mir-s3-cdn-cf.behance.net/project_modules/hd/e5079365113681.5ae94b6872f65.gif";
const gifUrlList = [];
let lastNumber = 0;
$("#enqueue").on("click", () => {
    gifUrlList.push(gifUrl);
    let url = gifUrlList[gifUrlList.length - 1];
    $(".gifContainer").append("<img src='" + url + "' class='gifs'>");
    $(".numberContainer").append("<h1 class='numbers'>" + ++lastNumber + "</h1>");
    swal("success", "Enqueued successfully!", "success");
});
$("#dequeue").on("click", () => {
    if(gifUrlList.length === 0){
        swal("Error", "No gifs to dequeue.", "error");
    }else{
        gifUrlList.shift();
        $(".gifContainer").children().first().remove();
        $(".numberContainer").children().first().remove();
        swal("success", "Dequeued successfully!", "success");

    }

});