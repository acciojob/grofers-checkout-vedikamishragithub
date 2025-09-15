const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
   const price=document.querySelectorAll('.price');
	let total=0;
	price.forEach(el=>{
		const val=parseFloat(el.textContent);
		if(!isNaN(val)){
         total+=val;
		}
	});

 const table = document.querySelector('table');
	
  const newRow=document.createElement('tr');
  newRow.classList.add('total-row');
	const labelCell=document.createElement('td');
	labelCell.textContent="Total";
	const valueCell=document.createElement('td');
	valueCell.textContent=total;
	newRow.appendChild(labelCell);
	newRow.appendChild(valueCell);
	table.appendChild(newRow);
	
	
	
   	 
};

getSumBtn.addEventListener("click", getSum);

