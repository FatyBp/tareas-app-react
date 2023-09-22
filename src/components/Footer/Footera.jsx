export const Footera = ({porcentaje}) => {
  return (
    <>
    <div className="position-fixed fixed-bottom">
    <div className="progress">
        <div className="progress-bar bg-success progress-bar-animated" 
        role="progressbar" 
        style={{width:porcentaje >= 0 ? `${porcentaje * 100}%`:`0%`}}
        aria-valuenow={porcentaje * 100} 
        aria-valuemin="0" 
        aria-valuemax="100">
         { Math.floor(porcentaje*100)}%
        </div>
    </div>
    </div>
    </>
  )
}
