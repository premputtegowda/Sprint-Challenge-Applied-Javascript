// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    const headerDiv = document.createElement('div');
	const dateSpan = document.createElement('span')
	const h1Heading = document.createElement('h1');
	const tempSpan = document.createElement('span');

	//add class

	headerDiv.classList.add('header');
	dateSpan.classList.add('date');
	tempSpan.classList.add('temp');

	//append

	headerDiv.append(dateSpan);
	headerDiv.append(h1Heading);
	headerDiv.append(tempSpan);

	//text content:
	dateSpan.textContent = "MARCH 28, 2019";

	h1Heading.textContent = "Lambda Times";
    tempSpan.textContent = "98°";
    
    return headerDiv;
}

const headerContainer = document.querySelector('.header-container');
headerContainer.append(Header());