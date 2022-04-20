import './MenuItem.css'

function MenuItem({type, price, qty, id, updateQty}){
    // Using the update qty function that was passed down from the Menu component. The values for the "id" and "qty" that are passed in as arguments for the following functions that are passed in 
    function addSkin(){
        updateQty(id, qty + 1)
    }

    function removeSkin(){
        updateQty(id, qty -1)
    }
    return(
       <div className='MenuItem'>
           <div>{type}</div>
           <div>${price}</div>
           <div>Qty: {qty}</div>
           <button onClick={addSkin}>+</button>
           {/* Using a ternary so the removeSlice function will not run when the qty is zero */}
           <button onClick={()=> (qty>0) ? removeSkin() : null}>-</button>
           <div>Total: ${price*qty}</div>
       </div>
    )
}

export default MenuItem;