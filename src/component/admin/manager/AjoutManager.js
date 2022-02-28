import React, { useState } from 'react'

const AjoutManager = () => {

    const [nom, setNom] = useState()
    const [prenom, setPrenom] = useState()
    const [adresse, setAdresse] = useState()
    const [fonction, setFonction] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [status, setStatus] = useState("admin")

    
  return (
    <div>
        <div className='container'>
            <form>
                <div className='form-group'>
                    <label className='control-label'>Nom</label>
                    <input className='form-control' type="text" name="nom" value={nom} placeholder="Enter votre nom" onChange={e => setNom(e)}></input>
                </div>
                <div className='form-group'>
                    <label className='control-label'>Prenom</label>
                    <input className='form-control' type="text" name="prenom" value={prenom} placeholder="Enter votre nom" onChange={e => setPrenom(e)}></input>
                </div>
                <div className='form-group'>
                    <label className='control-label'>Adresse</label>
                    <input className='form-control' type="text" name="adresse" value={adresse} placeholder="Enter votre nom" onChange={e => setAdresse(e)}></input>
                </div>
                <div className='form-group'>
                    <label className='control-label'>Fonction</label>
                    <input className='form-control' type="text" name="fonction" value={fonction} placeholder="Enter votre nom" onChange={e => setFonction(e)}></input>
                </div>
                <div className='form-group'>
                    <label className='control-label'>Status</label>
                    <select value={status} onClick={e => setStatus(e)}>
                        <option value="admin">Admin</option>
                        <option value="manager">Manager</option>
                    </select>
                </div>
                <div className='form-group'>
                    <label className='control-label'>Email</label>
                    <input className='form-control' type="email" name="email" value={email} placeholder="Enter votre nom" onChange={e => setEmail(e)}></input>
                </div>
                <div className='form-group'>
                    <label className='control-label'>Mot de passe</label>
                    <input className='form-control' type="password" name="password" value={password} placeholder="Enter votre nom" onChange={e => setPassword(e)}></input>
                </div>
                <div className='form-group'>
                    <button type='submit' className='btn btn-primary'>Valider</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AjoutManager