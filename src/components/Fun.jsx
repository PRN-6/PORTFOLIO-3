import React, { useState } from 'react'

const Fun = () => {
    const [count, setCount] = useState(0)
    
    return (
        <div className="p-4 flex flex-row lg:flex-row gap-6">
            <div className='bg-gray-900 w-1/2 flex items-center justify-center p-8 rounded-3xl '>
                {/* <p className="text-4xl font-mono mb-6">{count}</p> */}
                
                <button 
                    onClick={() => setCount(count + 1)}
                    className="bg-gray-900 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-2xl 
                            transition duration-300 transform hover:scale-105 active:scale-95"
                >
                    Click Me! {count}
                </button>
            </div>
            <div className='bg-gray-900 w-1/2 flex items-center justify-center p-8 rounded-3xl'>
                <p>Updating...</p>
            </div>
        </div>     
    )
}

export default Fun