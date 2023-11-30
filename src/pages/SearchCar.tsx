import '../assets/style.css'
import NavBar from '../components/landing-pages/NavBar'
import Footer from '../components/landing-pages/Footer'
import { useState } from 'react'

type FormMobil = {
  driverType: 'withDriver' | 'withoutDriver'
  date?: string | undefined,
  pickupTime: string,
  passengers: number
}

function SearchCar() {
  const [formMobil, setFormMobil] = useState<FormMobil>({
    driverType: 'withoutDriver',
    date: undefined,
    pickupTime: '09:00',
    passengers: 0,
  })

  function changeFormMobil(e: Event, name: keyof FormMobil) {
       

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
                          <form className="realSearchForm" id="carSearchForm" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                              <div className="form-group" style={{ flex: 1 }}>
                                  <label>Tipe Driver</label>
                                  <div className="selectDriver-with-icon mt-2">
                                      <select className="form-control" id="driverType" value={formMobil.driverType} onChange={(e) => } required>
                                          <option value="withDriver">Dengan Sopir</option>
                                          <option value="withoutDriver">Tanpa Sopir (Lepas Kunci)</option>
                                      </select>
                                  </div>
                              </div>
                                                   
                              <div className="form-group" style={{ flex: 1, maxWidth: '320px' }}>
                                  <label>Tanggal</label>
                                  <input type="date" value={formMobil.date} className="form-control mt-2" id="date" required />
                              </div>
                              <div className="form-group" style={{ flex: 1, maxWidth: '320px'}}>
                                  <label>Waktu Jemput / Ambil</label>
                                  <div className="select-with-icon mt-2">
                                      <select className="form-control" id="pickupTime" required value={formMobil.pickupTime}>
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
                                      <input type="number" className="form-control" value={formMobil.passengers} id="passengers" min="1" max="10" required />
                                  </div>
                              </div>
                              <button 
                                type="submit" 
                                id="searchButton" 
                                className="btn btn-green mt-3 ms-3" style={{ height: '40px', width: '100px'}} disabled >Cari Mobil</button>
                          </form>
                      </section>

                      <section id="filterResults" className="mt-3">
                      </section>
                  </div>
              </article>
          </main>
      <Footer />
    </>
  )
}

export default SearchCar
