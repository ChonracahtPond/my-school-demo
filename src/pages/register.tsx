
import useAxios from 'axios-hooks';
import { Inter } from 'next/font/google';
import React, { useRef, useState, useEffect, ChangeEvent } from "react";



const inter = Inter({ subsets: ['latin'] })

export default function Regfrom() {
  const [, executeIndexActivity] = useAxios(
    { url: '/api/regform', method: 'POST' },
    { manual: true }
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [educationOffice, setEducationOffice] = useState<string>("");
  const [fname, setFname] = useState<string>("");
  const [lname, setLname] = useState<string>("");
  const [birthday, setBirthday] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [isMissingModalOpen, setIsMissingModalOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (!fname || !lname || !birthday) {
      setIsMissingModalOpen(true);
      return;
    }

    try {
      setIsLoading(true);
      const response = await executeIndexActivity({
        data: { educationOffice, fname, lname, birthday },
      });
      setIsLoading(false);
      setIsSuccess(true);
      setIsModalOpen(true);
    } catch (error) {
      setIsLoading(false);
      setIsSuccess(false);
    }
  };

  const handleCloseModal = () => {
    window.location.reload();
    setIsModalOpen(false);
  };

  const handleConfirm = () => {
    window.location.reload();
    setIsModalOpen(false);
  };


 
  return (
    <>

      <section className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 my-10">
        <h1 className="font-bold text-white capitalize dark:text-white text-2xl">ข้อมูลผู้สมัครเรียน</h1>
        <form >
  
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
           
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="fname">ชื่อ</label>
              <input
                id="fname"
                value={fname}
                onChange={(e) => {
                  const inputValue = e.target.value;
                  if (!/^[A-Za-zก-๙]*$/.test(inputValue)) {
                    alert('กรุณากรอกตัวอักษรเท่านั้น');
                    return;
                  }
                  setFname(inputValue);
                }}
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="lname">นามสกุล</label>
              <input id="lname" value={lname} onChange={(e) => setLname(e.target.value)} type="text" pattern="^[A-Za-zก-๙\s]*$" title="กรุณากรอกข้อมูลให้ถูกต้อง" required className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="birthday">วัน/เดือน/ปี เกิด</label>
              <input id="date" value={birthday} onChange={(e) => setBirthday(e.target.value)} type="date" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
          </div>
        
        
       




      


         
        


          <div className="flex justify-end mt-6">
            <button type="submit"
              disabled={isLoading}
              onClick={handleSubmit} className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">Save</button>
          </div>
          {isMissingModalOpen && (
            <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-75">
              <div className="bg-white p-6 rounded-lg text-center">
                <p className="text-red-500 text-lg mb-4">กรุณากรอกข้อมูลให้ครบถ้วน</p>
                <button
                  onClick={() => setIsMissingModalOpen(false)}
                  className="px-4 py-2 bg-red-500 text-white rounded-md focus:outline-none"
                >
                  ปิด
                </button>
              </div>
            </div>
          )}
          {isModalOpen && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
              <div className="bg-white p-6 rounded-lg mx-auto">
                <p className="text-2xl font-semibold mb-4">ยืนยันการสมัคร</p>
                <p>คุณต้องการจองคิวหรือไม่?</p>
                <div className="mt-4 flex justify-end">
                  <button
                    onClick={handleCloseModal} // เรียกใช้งานเมื่อกดปุ่ม "ยกเลิก"
                    className="px-4 py-2 bg-red-500 text-white rounded-md mr-2"
                  >
                    ยกเลิก
                  </button>
                  <button
                    onClick={handleConfirm} // เรียกใช้งานเมื่อกดปุ่ม "ยืนยัน"
                    className="px-4 py-2 bg-green-500 text-white rounded-md"
                  >
                    ยืนยัน
                  </button>
                </div>
              </div>
            </div>
          )}

        </form>
      </section>


    </>
  )
}
