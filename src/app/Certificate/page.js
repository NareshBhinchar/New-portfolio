export default function Page() {
  console.log(process.env.CERTIFICET_IMAGE_PATH); // ✅ env log यहाँ होगा

  return (
  
    <div className="p-5 max-w-[1320px] mx-auto">
      <img 
        src="certificate/certificate.png" 
        alt="certificate" 
        className="mx-auto mt-10 mb-10"
      />
    </div>
   
  )
}