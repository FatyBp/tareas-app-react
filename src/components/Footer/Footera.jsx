export const Footera = ({porcentaje}) => {
  return (
    <>
  <div className="progress">
        <div className="progress-bar bg-success progress-bar-animated" 
        role="progressbar" 
        style={{width:`${porcentaje * 100}%`}}
        aria-valuenow={porcentaje * 100} 
        aria-valuemin="0" 
        aria-valuemax="100">
         { Math.floor(porcentaje*100)}%
        </div>
    </div>
    </>
  )
}
