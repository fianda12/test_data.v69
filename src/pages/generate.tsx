import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import QRCode from "qrcode.react";

interface Data {
  id: number;
  avatar: string;
  full_name: string;
  no_hp: number;
  citizenship: string;
  email: string;
  age: number;
  gender: string;
  residence: string;
  status: string;
  wali: {
    parent_name: string;
    residence: string;
    job: string;
    no_hp: number;
  };
  previous_education: string;
  class: string;
  extracurricular: string;
  achievements: string;
}

const dummyData: Data[] = [
  {
    id: 1,
    avatar:
      "https://i.pinimg.com/originals/79/0d/4e/790d4e0446a2b57bf8d404020fc5e286.jpg",
    full_name: "Evawxsh",
    no_hp: +6211223344,
    citizenship: "Indonesia",
    email: "evawxsh@instagram.com",
    age: 21,
    gender: "Female",
    residence: "Jakarta",
    status: "Active",
    wali: {
      parent_name: "Yuna",
      residence: "Jakarta",
      job: "Cosplayer",
      no_hp: +6211223344,
    },
    previous_education: "SMP",
    class: "MIPA X",
    extracurricular: "Cosplayer",
    achievements: "Cosplayer",
  },
  {
    id: 2,
    avatar:
      "https://i.pinimg.com/originals/5a/2a/61/5a2a61d2ba0e11df06c9e6b25113f588.png",
    full_name: "Hewe Trevillion",
    no_hp: +6211223344,
    citizenship: "Indonesia",
    email: "htrevillion0@instagram.com",
    age: 21,
    gender: "Male",
    residence: "Ivanec",
    status: "Unactive",
    wali: {
      parent_name: "Trevillion",
      residence: "Ivanec",
      job: "Programmer",
      no_hp: +6211223344,
    },
    previous_education: "SMP",
    class: "MIPA XI",
    extracurricular: "engineer",
    achievements: "hengker",
  },
  {
    id: 3,
    avatar:
      "https://i.pinimg.com/originals/99/bf/40/99bf408a11286f78bc73b6370886ea23.png",
    full_name: "Marven Sharple",
    no_hp: +6211223344,
    citizenship: "Indonesia",
    email: "msharple1@infoseek.co.jp",
    age: 21,
    gender: "Male",
    residence: "Geghanist",
    status: "Active",
    wali: {
      parent_name: "Sharple",
      residence: "Geghanist",
      job: "hengker",
      no_hp: +6211223344,
    },
    previous_education: "SMP",
    class: "IPS XII",
    extracurricular: "N/A",
    achievements: "N/A",
  },
];

const Generate = () => {
  const { id_data } = useParams();
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    const selectData = dummyData.find((item) => item.id === Number(id_data));
    setData(selectData || null);
  }, [id_data]);

  const openModal = () => {
    const modal = document.getElementById("my_modal_3") as HTMLDialogElement;
    modal.showModal();
  };

  const closeModal = () => {
    const modal = document.getElementById("my_modal_3") as HTMLDialogElement;
    modal.close();
  };

  const generateQRCode = (id: number) => {
    const dummyDataURL = `https://test-data-v69.vercel.app/${id}`;
    return dummyDataURL;
  };

  return (
    <div className="bg-white w-full h-full md:h-screen p-6">
      <div className="flex flex-col md:flex-row mt-5">
        <div className="bg-white w-full h-full md:h-screen p-6">
          <div className="flex flex-col md:flex-row mt-5">
            {data ? (
              <>
                <div className="mx-auto w-8/12 md:w-2/12 md:h-full shadow-black shadow-sm rounded-md mt-8 space-y-5 p-5">
                  <div className="flex justify-center">
                    <div className="avatar">
                      <div className="w-32 md:w-28 rounded-full">
                        <img src={data.avatar} />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    <p className="text-black uppercase font-semibold font-mono text-2xl">
                      {data.full_name}
                    </p>
                  </div>
                  <hr />
                  <div className="flex flex-row justify-around items-center space-x-6">
                    <div className="text-black text-base md:text-lg tracking-wide font-semibold">
                      <p>Age</p>
                      <p>Status</p>
                    </div>
                    <div className="text-black text-base md:text-lg tracking-wide font-semibold">
                      <p>{data.age}</p>
                      <p>{data.status}</p>
                    </div>
                    <hr />
                    <div className="flex justify-center items-center">
                      <button
                        className="btn bg-white text-black shadow-black shadow-md uppercase text"
                        onClick={openModal}
                      >
                        QR-Code
                      </button>
                    </div>
                    <dialog id="my_modal_3" className="modal">
                      <div className="modal-box bg-white w-9/12 h-11/12">
                        <form method="dialog">
                          <button
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            onClick={closeModal}
                          >
                            ✕
                          </button>
                        </form>
                        <div className="flex justify-center items-center">
                          <QRCode value={generateQRCode(data.id)} size={180} />
                        </div>
                      </div>
                    </dialog>
                  </div>
                </div>
                <div className="mx-auto mt-24 md:mt-8 p-2">
                  <div className="flex flex-col">
                    <div className="flex justify-center items-center bg-black w-28 md:w-32 h-9 md:h-11 rounded-lg">
                      <p className="text-white text-lg md:text-xl uppercase tracking-wide">
                        Personal #
                      </p>
                    </div>
                    <div className="flex flex-row space-x-10 mt-4">
                      <div className="text-black text-base md:text-xl md:space-y-3 tracking-wide font-semibold">
                        <p>No_hp</p>
                        <p>Citizenship </p>
                        <p>Email </p>
                        <p>Gender</p>
                        <p>Residence</p>
                        <p>Previous_education</p>
                        <p>Class</p>
                        <p>Extracurricular</p>
                        <p>Achievements</p>
                      </div>
                      <div className="text-black text-base md:text-xl md:space-y-3 tracking-wide font-semibold">
                        <p>{data.no_hp}</p>
                        <p>{data.citizenship}</p>
                        <p>{data.email}</p>
                        <p>{data.gender}</p>
                        <p>{data.residence}</p>
                        <p>{data.previous_education}</p>
                        <p>{data.class}</p>
                        <p>{data.extracurricular}</p>
                        <p>{data.achievements}</p>
                      </div>
                    </div>
                    <div className="flex justify-center items-center bg-black w-28 md:w-32 h-9 md:h-11 rounded-lg mt-8">
                      <p className="text-white text-lg md:text-xl uppercase tracking-wide">
                        Parents #
                      </p>
                    </div>
                    <div className="flex flex-row space-x-10 mt-4">
                      <div className="text-black text-base md:text-xl md:space-y-3 tracking-wide font-semibold">
                        <p>Parent's Name</p>
                        <p>Parent's job </p>
                        <p>Telf </p>
                        <p>Residence</p>
                      </div>
                      <div className="text-black text-base md:text-xl md:space-y-3 tracking-wide font-semibold">
                        <p>{data.wali.parent_name}</p>
                        <p>{data.wali.job}</p>
                        <p>{data.wali.no_hp}</p>
                        <p>{data.wali.residence}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="mx-auto mt-20">
                <p className="text-6xl text-black font-semibold">Oops!</p>
                <p className="text-3xl text-black font-semibold">
                  Tidak ada data yang ditemukan
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generate;
