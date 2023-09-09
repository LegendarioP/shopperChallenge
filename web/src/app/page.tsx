import { api } from "@/lib/api"
import ButtonUpload from "./components/Butonchanger"
// import ValidateButton from "./components/ValidateButton"


interface Products {
  code: number,
  name:  String,
  cost_price: number,
  sales_price: number
}


export default async function Home() {

  const response = await api.get('/products')
  const prods: Products[] = response.data




  
  
  return (
    <main className="flex justify-center">

        {/* <ValidateButton /> */}

        <ButtonUpload />
        <table >
          <thead>
            <tr>
                <th>code</th>
                <th>name</th>
                <th>cost_price</th>
                <th>sales_price</th>
            </tr>
          </thead>
          <tbody>
          {prods.map(products => {  
            return(
              <tr key={products.code} id={`${products.code}`}>
                  <td>{products.code}</td>
                  <td>{products.name}</td>
                  <td>{products.cost_price}</td>
                  <td>{products.sales_price}</td>
              </tr>
            )
            })}
          </tbody>
        </table>
        
      
    </main>
  )
}
