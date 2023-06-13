const gifUrl = "https://media.giphy.com/media/StKiS6x698JAl9d6cx/giphy.gif";
const gifUrlList = [];
let numberList = [];
let lastNumber = 0;
$("#enqueue").on("click", () => {
    gifUrlList.push(gifUrl);
    ++lastNumber;
    numberList.push(lastNumber);
    let url = gifUrlList[gifUrlList.length - 1];
    $(".gifContainer").append("<img src='" + url + "' class='gifs'>");
    $(".numberContainer").append("<h1 class='numbers'>" + lastNumber + "</h1>");
    swal("success", "Enqueued successfully!", "success");
});
$("#dequeue").on("click", () => {
    /*This if condition never gets true , coz we rotating the array itself and
    * never removes an element.*/
    if (gifUrlList.length === 0 || numberList.length === 0) {
        swal("Error", "No gifs to dequeue.", "error");
        /*Refreshes the page if there isnt any elements in the array.*/
        setTimeout(()=>{
            window.location.reload()
        },1000)
    } else {
        /*Removes the last element and replace it with the first element according to the use case.*/
        gifUrlList.unshift(gifUrlList.pop());
        numberList.unshift(numberList.pop());
        $(".gifContainer").empty();
        $(".numberContainer").empty();
        numberList.map((number) => {
            $(".numberContainer").append("<h1 class='numbers'>" + number + "</h1>");

        });

        gifUrlList.map((url) => {
            $(".gifContainer").append("<img src='" + url + "' class='gifs'>");
        });


        swal("success", "Dequeued successfully!", "success");
    }
});