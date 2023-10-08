import { useState } from 'react'
import Button from '../../common/buttons/Button'

function SelectTypeAccount({ onContinue }) {
    const [type, setType] = useState('emp')
    return (
        <>
            <div className="mb-8 flex justify-around gap-x-4">
                <label
                    htmlFor="client"
                    className={`relative rounded-xl bg-stone-200 px-4 py-8 text-xl hover:ring-2 hover:ring-primary ${
                        type === 'emp' ? 'ring-2 ring-primary' : ''
                    }`}
                >
                    Tôi muốn tuyển dụng freelancer
                    <input
                        id="client"
                        className="absolute right-2 top-2 h-4 w-4 border-gray-300 bg-gray-100 text-primary "
                        type="radio"
                        name="typeAccount"
                        value="emp"
                        checked={type === 'emp'}
                        onChange={(e) => setType(e.target.value)}
                    />
                </label>

                <label
                    htmlFor="freelancer"
                    className={`relative rounded-xl bg-stone-200 px-4 py-8 text-xl hover:ring-2 hover:ring-primary ${
                        type === 'fre' ? 'ring-2 ring-primary' : ''
                    }`}
                >
                    Tôi là người tìm việc freelance
                    <input
                        id="freelancer"
                        className="absolute right-2 top-2 h-4 w-4 border-gray-300 bg-gray-100 text-primary "
                        type="radio"
                        name="typeAccount"
                        value="fre"
                        checked={type === 'fre'}
                        onChange={(e) => setType(e.target.value)}
                    />
                </label>
            </div>

            <Button
                type="btn-primary"
                className="mx-auto w-72 rounded"
                onClick={() => onContinue({ role: type })}
            >
                Tiếp tục với vai trò{' '}
                {type === 'emp' ? 'Tuyển dụng' : 'Freelancer'}
            </Button>
        </>
    )
}

export default SelectTypeAccount
