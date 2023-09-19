import Button from '../../common/buttons/Button'

function SelectTypeAccount({ typeAccount, onSelected, onContinue }) {
    return (
        <>
            <div className="mb-8 flex justify-around gap-x-4">
                <label
                    htmlFor="client"
                    className={`relative bg-stone-200 rounded-xl px-4 py-8 text-xl hover:ring-2 hover:ring-primary ${
                        typeAccount === 'client' ? 'ring-2 ring-primary' : ''
                    }`}
                >
                    Tôi muốn tuyển dụng freelancer
                    <input
                        id="client"
                        className="absolute top-2 right-2 w-4 h-4 text-primary bg-gray-100 border-gray-300 "
                        type="radio"
                        name="typeAccount"
                        value="client"
                        checked={typeAccount === 'client'}
                        onChange={(e) => onSelected(e.target.value)}
                    />
                </label>

                <label
                    htmlFor="freelancer"
                    className={`relative bg-stone-200 rounded-xl px-4 py-8 text-xl hover:ring-2 hover:ring-primary ${
                        typeAccount === 'freelancer'
                            ? 'ring-2 ring-primary'
                            : ''
                    }`}
                >
                    Tôi là người tìm việc freelance
                    <input
                        id="freelancer"
                        className="absolute top-2 right-2 w-4 h-4 text-primary bg-gray-100 border-gray-300 "
                        type="radio"
                        name="typeAccount"
                        value="freelancer"
                        checked={typeAccount === 'freelancer'}
                        onChange={(e) => onSelected(e.target.value)}
                    />
                </label>
            </div>

            <Button
                type="btn-primary"
                className="rounded mx-auto w-72"
                onClick={() => onContinue((step) => step + 1)}
            >
                Tiếp tục với vai trò{' '}
                {typeAccount === 'client' ? 'Tuyển dụng' : 'Freelancer'}
            </Button>
        </>
    )
}

export default SelectTypeAccount
