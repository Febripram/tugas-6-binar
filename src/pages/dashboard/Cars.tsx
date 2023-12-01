import { useEffect } from 'react';
import Table from '../../components/Table'
import { httpFetch } from '../../utils/http'

const Cars = () => {
  async function fetchInitialData() {
    const json = await httpFetch(`cars/461ca98a-3907-4d99-9b54-f819f79bc766`, true)
    console.log(json)
  }
  
  useEffect(() => {
    fetchInitialData()
  }, [])

  return (
    <div>
      <h2>Cars Page</h2>
      <Table />
    </div>
  );
};

export default Cars;
