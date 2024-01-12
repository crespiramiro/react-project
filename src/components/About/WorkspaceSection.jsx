function WorkspaceSection() {
    return (  
              <div className="flex w-full h-full mb-8 ml-0 flex-col items-center gap-y-4 lg:gap-x-8 mx-2 justify-center lg:flex-row" >
                <div className="img-container px-4 w-fit h-fit pt-8 ">
                <img src="about/workspace.avif" alt=" Avant Studios Workspace" width="450rem" />
                </div>
                <div className="text-container px-4 max-w-prose text-md flex flex-col items-center lg:items-start gap-y-4 ">
                    <h2 className="text-2xl lg:text-4xl" >Elevate Your Style <span className="text-yellow-400" >at Home</span></h2>
                    <p className="" >Discover elegance in every detail with our exclusive collection of accessories from Future Studios. From exquisite jewelry to stylish scarves, each piece is designed to elevate your style, even while working from home.</p>
                    <p className="" >Interested in gifting these unique pieces to a group? Contact us to discuss personalized packages and options for exclusive messages.</p>
                    <button className="bg-yellow-400 hover:shadow-2xl text- p-3 rounded-md " ><p className="font-semibold" >Buy Now</p></button>
                </div>
                </div>      
    );
}

export default WorkspaceSection;