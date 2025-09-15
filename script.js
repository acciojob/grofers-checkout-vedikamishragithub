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


 let totalRow=table.querySelector('.total-row');
	
	if(!totalRow){ 
	const newRow=document.createElement('tr');
    newRow.classList.add('total-row');
	const labelCell=document.createElement('td');
	labelCell.textContent="Total";
	const valueCell=document.createElement('td');
	valueCell.textContent=total;
    valueCell.id = 'ans';
		
	newRow.appendChild(labelCell);
	newRow.appendChild(valueCell);
	table.appendChild(newRow);
	}else{
        const valueCell = totalRow.querySelector('.total-value');
        valueCell.textContent = total;
	}
   	 
};

getSumBtn.addEventListener("click", getSum);

