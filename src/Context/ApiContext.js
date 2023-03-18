import { createContext, useContext, useEffect, useState } from "react";

const ApiProvider = createContext();

const ApiContext = ({ children }) => {
  const [student, setStudent] = useState([]);
  const [notice, setNotice] = useState([]);
  const [attend, setAttend] = useState([]);
  const [sattend, setSAttend] = useState();

  useEffect(() => {
    fetch("https://on-trackz-backend.vercel.app/students")
      .then(res => res.json())
      .then(data => setStudent(data.data))
  }, [])

  useEffect(() => {
    fetch("https://on-trackz-backend.vercel.app/students/physics")
      .then(res => res.json())
      .then(data => setSAttend(data.data))
  }, [])

  useEffect(() => {
    fetch("https://on-trackz-backend.vercel.app/notice")
      .then(res => res.json())
      .then(data => setNotice(data.data))
  }, [])



  // update

  useEffect(() => {
    fetch("https://on-trackz-backend.vercel.app/attend/john.smith@example.com")
      .then(res => res.json())
      .then(data => setAttend(data.data))
  }, [])




  const value = {
    student, notice, attend, sattend
  }

  return (
    <ApiProvider.Provider value={value}>
      {children}
    </ApiProvider.Provider>
  )

};

export const useApi = () => {
  const context = useContext(ApiProvider);
  return context;
}

export default ApiContext;