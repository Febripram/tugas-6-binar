import '../assets/style.css'
import NavBar from '../components/landing-pages/NavBar'
import Footer from '../components/landing-pages/Footer'
import React, { useState } from 'react'
import { Alert } from 'react-bootstrap'
import CarCard from '../components/landing-pages/CarCard'

const BACKEND_URL = import.meta.env['VITE_BACKEND_URL']

type FormMobil = {
  driverType: 'withDriver' | 'withoutDriver'
  date?: string | undefined,
  pickupTime: string,
  passengers: number
}

type EventTargetForm = {
  elements: Record<string, { value: string | number }>
  
}

function SearchCar() {
  const [foundCars, setFoundCars] = useState<Array<any> | undefined>()

  async function submitCariMobil(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const target = e.target as unknown as EventTargetForm
    const formData: FormMobil =  {
      driverType: target.elements.pickupTime.value as FormMobil['driverType'],
      passengers: +target.elements.passengers.value,
      date: String(target.elements.date.value),
      pickupTime: String(target.elements.date.value)
    }
    const url = new URL(`${BACKEND_URL}api/v1/cars`)
    url.searchParams.append('inputTanggal', formData.date ?? '')
    url.searchParams.append('waktuJemput', formData.pickupTime ?? '')
    url.searchParams.append('jumlahPenumpang', String(formData.passengers))
    console.log(url.toString())

    const res = await fetch(url.toString())
    const json = await res.json()
    if (res.ok) {
      setFoundCars(json)
    } else {
      console.log(json)
    }
  }


  return (
    <>
          <NavBar />
          <main className="mb-3">
              <article>
                  <section className="hero" id="hero" >
                      <div className="container hero-section" id="hero-section">
                          <div className="row">
                              <div className="col left-hero-section">
                                  <h1 className="heading-hero">Sewa & Rental Mobil Terbaik di kawasan Semarang</h1>
                                  <p className="detail-heading detail-heading-hero-style lh-lg">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangaku. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                                  <button className="btn-green btn-hero" style={{ display: 'none'}}>
                                      <div className="btn"><a href="/cars" style={{ textDecoration: 'none', color: 'white' }}>Mulai Sewa Mobil</a></div>
                                  </button>
                              </div>

                              <div className="col imagehero-section ">
                                  <div className="position-relative image-wrap-hero">
                                      <div className="bottom-0 end-0">
                                          <img src="https://i.ibb.co/x320NJr/img-car.png" alt="img-car" className="imagehero-style" style={{flex: 1, maxWidth: 100 }} />
                                          <img src="https://i.ibb.co/x320NJr/img-car.png" alt="img-car" className="image-desktop-style" style={{flex: 1, maxWidth: '500px'}} />
                                          <img src="https://i.ibb.co/x320NJr/img-car.png" alt="img-car" className="image-desktop-style-1440" style={{ width: '720px' }}/>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </section>

                  <div className="container" style={{ marginTop: '-65px' }}>
                      <section className="responsive-form shadow" >
                          <form className="realSearchForm" id="carSearchForm" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }} onSubmit={submitCariMobil}>
                              <div className="form-group" style={{ flex: 1 }}>
                                  <label>Tipe Driver</label>
                                  <div className="selectDriver-with-icon mt-2">
                                      <select className="form-control" id="driverType" required>
                                          <option value="withDriver">Dengan Sopir</option>
                                          <option value="withoutDriver">Tanpa Sopir (Lepas Kunci)</option>
                                      </select>
                                  </div>
                              </div>
                                                   
                              <div className="form-group" style={{ flex: 1, maxWidth: '320px' }}>
                                  <label>Tanggal</label>
                                  <input type="date" className="form-control mt-2" id="date" required />
                              </div>
                              <div className="form-group" style={{ flex: 1, maxWidth: '320px'}}>
                                  <label>Waktu Jemput / Ambil</label>
                                  <div className="select-with-icon mt-2">
                                      <select className="form-control" id="pickupTime" required>
                                          <option value="08:00">08.00 WIB</option>
                                          <option value="09:00">09.00 WIB</option>
                                          <option value="10:00">10.00 WIB</option>
                                          <option value="11:00">11.00 WIB</option>
                                          <option value="12:00">12.00 WIB</option>
                                      </select>
                                  </div>
                              </div>      
                              <div className="form-group" style={{flex: 1, maxWidth: '320px' }}>
                                  <label>Jumlah Penumpang</label>
                                  <div className="inputPassengers-with-icon mt-2">
                                      <input type="number" className="form-control" id="passengers" min="1" max="10" required />
                                  </div>
                              </div>
                              <button 
                                type="submit" 
                                id="searchButton" 
                                className="btn btn-green mt-3 ms-3" style={{ height: '40px', width: '100px'}}>Cari Mobil</button>
                          </form>
                      </section>

                      <section id="filterResults" className="mt-3">
                        {!foundCars && null}
                        {foundCars && foundCars.length === 0 && (<Alert variant='danger'>Cannot found any cars</Alert>)}
                        {foundCars && foundCars?.length > 0 && foundCars.map(c => <CarCard key={c.model} car={c} />)}
                      </section>
                  </div>
              </article>
          </main>
      <Footer />
    </>
  )
}

export default SearchCar
