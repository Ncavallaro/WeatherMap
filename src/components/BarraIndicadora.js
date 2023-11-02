import '../css/BarraIndicadora.css'

const BarraIndicadora = ({min, max}) => {
  return (
    <div className='temperature-bar'>
      <div className='bar'>
        <span className='min'>{`Min: ${min}`}</span>
        <span className='max'>{`Max: ${max}`}</span>
      </div>
    </div>
  )
}

export default BarraIndicadora
