function ColumnCard(props) {
    return ( 
        <div className="flex flex-col max-w-prose gap-y-2 " >
          {props.icon}
            <h3 className=" text-lg lg:text-2xl" >{props.title}</h3>
            <p className="text-xl lg:text-xl" >{props.p}</p>
        </div>
     );
}

export default ColumnCard;