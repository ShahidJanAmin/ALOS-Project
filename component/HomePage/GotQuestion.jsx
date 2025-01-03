import React from 'react'
import CustomButton from '../common/CustomButton'

function GotQuestion() {
    return (
        <div>
            <div className='w-[80%] py-10 bg-blue-900 mx-auto px-3 space-y-3'>
                <h1 className='text-start md:text-5xl text-2xl font-bold text-white'>
                    Got Questions?
                </h1>
                <h3 className='text-start md:text-4xl text-2xl text-white/70'>
                    Check out our FAQ's section for help
                </h3>

                <div className='w-fit'>
                    <CustomButton title={' Read FAQ '} bgcolor="orange" bg={true} icon={false} link={'/'} />
                </div>
            </div>
        </div>
    )
}

export default GotQuestion
