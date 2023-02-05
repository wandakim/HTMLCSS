// Fetch the items from the JSON file
function loadItems() {  // data.json을 유효하게 불러오면 items를 리턴하는 함수
    return fetch('data/data.json')  // fetch 사용법은 더 공부 필요
    .then(response => response.json()) // fetch()를 통해 받아온 데이터가 유효하면 json으로 변환한다. 
    .then(json => json.items) //변환한 json의 items를 리턴한다. 
}
// Update list with the given items
function displayItems(items) {  //  Html의 itmes를 이용해 container요소를 정의하고 
    const container = document.querySelector('.items'); // container요소를 정의해줌
    container.innerHTML = items.map(items => createHtmlString(items)).join(''); 
    // map을 이용해 배열의 각 요소를 조정하여 다름 배열을 만들었다. 
}
// Create Html list item from the given data
function createHtmlString(item) { //items의 정보를 전달받아 Html 코드를 생성한다. 
    return`      
    <li class="item">
    <img src=${item.image} alt="${item.type}" class="item__thumbnail">
    <span class="item__description">${item.gender}, ${item.size}</span>
    </li> 
    `;
}
//main
loadItems() // items 불러옴.
    .then(items => { 
        displayItems(items);     //Html에 보여주고 itmes 함수에 전달해준다. 
        // setEventlisteners(items)  //버튼을 누르면 필터링 될 수 있도록 한다. 
    })
    .catch(console.log);    //받아오지 못했을 경우. 