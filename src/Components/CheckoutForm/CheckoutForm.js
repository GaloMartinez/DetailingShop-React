import {useState} from 'react'

const CheckoutForm = ({onConfirm}) => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [emailConfirmation, setEmailConfirmation] = useState("")

    const handleConfirm = (event) => {
        event.preventDefault()

        if(name && phone && email === emailConfirmation ){
            onConfirm({name, phone, email})
        }
       
    }

    return(
        <div className='max-w-sm mx-auto overflow-hidden shadow-lg bg-gray-200 mt-16 mb-10'>
    <form onSubmit={handleConfirm} className='flex-col space-y-4 px-4 py-2'>
    <h1 className="text-2xl font-bold camelCase  mt-5 text-center">Checkout</h1>
        <label className='text-sm font-bold'>
            Nombre
            <input
                className='ring-1 ring-gray-300 w-full rounded-md outline-none focus:ring-2 focus:ring-blue-300 px-4 py-2'
                type='text'
                placeholder='Ingrese su nombre'
                value={name}
                onChange={({target}) => setName(target.value)}
            />
        </label>
        <label className='text-sm font-bold'>
            Telefono
            <input
                className='ring-1 ring-gray-300 w-full rounded-md outline-none focus:ring-2 focus:ring-blue-300 px-4 py-2'
                type='text'
                placeholder='Ingrese su telefono'
                value={phone}
                onChange={({target}) => setPhone(target.value)}
            />
        </label>
        <label className='text-sm font-bold'>
            Email
            <input
                className='ring-1 ring-gray-300 w-full rounded-md outline-none focus:ring-2 focus:ring-blue-300 px-4 py-2'
                type='text'
                placeholder='Ingrese su email'
                value={email}
                onChange={({target}) => setEmail(target.value)}
            />
        </label>
        <label className='text-sm font-bold'>
            Confirmar email
            <input
                className='ring-1 ring-gray-300 w-full rounded-md outline-none focus:ring-2 focus:ring-blue-300 px-4 py-2'
                type='text'
                placeholder='Confirme su email'
                value={emailConfirmation}
                onChange={({target}) => setEmailConfirmation(target.value)}
            />
        </label>
        <div className='text-center px-6 pt-0 pb-8'>
            <button
                type='submit'
                className='mt-4 bg-cyan-900 hover:bg-gray-800  rounded-sm text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline'
            >
                Crear Orden
            </button>
        </div>
    </form>
</div>

    )




}
export default CheckoutForm