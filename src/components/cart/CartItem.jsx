export function CartItem ({producto, removeFromCart}) {

    let {product, img, price, quantity} = producto

    return (
        <div className="cart-item flex flex-col justify-start items-center gap-y-2 ">
            <img src={img} alt={product} width={80} />
            <h4>{product}</h4>
            <h5>{price} x {quantity}</h5>
            <button  onClick={()=>{removeFromCart(producto); console.log('Eliminando producto', producto);  }} >Eliminar Producto</button>
        </div>
    );
}


