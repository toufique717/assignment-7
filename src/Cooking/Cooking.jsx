 

const Cooking = () => {
    return (
        <div className='md:w-1/3'>
            <h1>cooking</h1>

            <div className="border-2">
                <div className="p-10">
                   <p className="text-2xl font bold border-b-2 ">Want to cook:</p>

                    <div className="grid grid-cols-3">
                      <p>Name </p>
                      <p>Times</p>
                      <p>Calories</p>
                    </div>
                </div>

                 
            </div>
        </div>
    );
};

export default Cooking;