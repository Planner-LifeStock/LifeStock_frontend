import { useEffect, useState } from 'react'
import { API } from '../api/axios'

export const useCompanyData = () => {
  const [companyList, setCompanyList] = useState(null)
  const [activeCompany, setActiveCompany] = useState(null)

  useEffect(() => {
    const fetchCompanyData = async () => {
      try {
        const result = await API.get('/company?userId=1')
        setCompanyList(result.data)
        setActiveCompany(result.data[0])
      } catch (error) {
        console.log(error)
      }
    }
    fetchCompanyData()
  }, [])

  return {
    companyList,
    setCompanyList,
    activeCompany,
    setActiveCompany,
  }
}
