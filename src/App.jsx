import './App.css'
import Card1 from './components/card1'
import Button from './components/button'
import Card2 from './components/Card2'


const App = () => {
  return (
    <div>
      {/* header */}
      <header className='lg:py-[32px] lg:px-[110px] sm:py-[24px] sm:px-[12px]'>
        <nav className='flex lg:justify-between items-center sm:gap-[20px]'>
          <div className='flex  items-center gap-[40px]'>
            <img src="src/assets/icon/IMAGE.png" alt="" />
            <ul className="lg:flex gap-[22px]  sm:hidden ">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Pages</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* right */}
          <div className='flex items-center gap-[24px]'>
            <button className='lg:block sm:hidden'>Cart(0)</button>
            <Button btn={"Get a free quote"}  mystyle="lg:px-[28px] lg:py-[14px] sm:px-[25px] sm:py-[12px]"/>
          </div>
        </nav>
      </header>

      {/* sectuon1 */}
      <section className='flex lg:justify-between items-center pt-[24px] sm:flex-wrap'>

        {/* left */}
        <aside className='lg:pl-[110px]  lg:px-[0] sm:px-[24px] '>
          <h1 className='lg:w-[550px] lg:text-[68px] font-[700] sm:text-[42px]'>Quality cleaning for your home</h1>
          <p className='text-[#6E7191] leading-[31px] lg:w-[591px] lg:text-[21px] pt-[22px]'>Condimentum mauris sit cursus amet id non neque pharetra nulla ornare sed facilisis senectus dapibus nibh ultrices eget suscipit aliquet et nulla magna lacus penatibus.</p>
          
          <div className='flex items-center gap-[28px] pt-[40px]'>
            <Button btn={"Get a free quote"} mystyle="lg:px-[38px] lg:py-[26px] sm:px-[25px] sm:py-[12px]"/>
            <div className='flex items-center'>
              <img src="src/assets/icon/IMAGE (2).png" />
              <div className='lg:block sm:hidden'>
                 <p className='text-[#6E7191] lg:uppercase'>Call us now</p>
                 <h2 className='lg:text-[28px] sm:text-[18px] font-[700]'>(414) 567 - 2109</h2>
              </div>
            </div>
          </div>
        </aside>

        {/* right */}
        <aside>
          <img src="src/assets/images/Group.png"/>
        </aside>
      </section>

      {/* section2 */}
      <section className='lg:py-[150px] sm:py-[50px]'>
        <h1 className='lg:text-[48px] text-center sm:text-[52px] font-[700]'>How our service works?</h1>
        <p className='text-[#6E7191] text-center lg:text-[21px]'>Sagittis nibh scelerisque vitae eget vulputate sem elementum sed neque nisi felis non ultrices massa id <br></br>egestas quam velit pretium nu.</p>
       
        <div className='flex lg:justify-center items-center gap-[35px] sm:flex-wrap lg:px-[0] sm:px-[12px] sm:py-[50px]'>
          <Card1 img1={"src/assets/card1/IMAGE (26).png"} h2={"1. Schedule online"} p={"Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n."} />
          <Card1 img1={"src/assets/card1/IMAGE (26).png"} h2={"2. Pay online easily"} p={"Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida amet at nunc."} />
          <Card1 img1={"src/assets/card1/IMAGE (26).png"} h2={"3. Get your house cleaned"} p={"Nunc maecenas sollicitudin metus tellus mattis sed porttitor cursus eleifend."} />
        </div>
        <div className='flex justify-center gap-[20px]'>
        <Button btn={"Get a free quote"} mystyle={"lg:px-[28px] lg:py-[14px] sm:px-[25px] sm:py-[12px]"}/>
        <Button btn={"Explore services"} mystyle={"bg-[#fff] text-[black] border-[2px] lg:px-[28px] lg:py-[14px] sm:px-[25px] sm:py-[12px]"}/>
        </div>
      </section>


      <hr className='lg:mx-[110px] sm:mx-[12px]' />

      {/* sectiom */}
      <section className='lg:py-[150px] sm:py-[50px]'>
        <h1 className='text-center font-[700] text-[48px]'>Our cleaning services have <br></br> no comparison</h1>
        <p className='text-center text-[#6E7191]'>Lobortis mattis odio leo eget mauris met aliquet semper molestie sollicitudin congue massa mauris lectus <br></br>vitae cras viverra gravida sapien.</p>
       
        <div className='flex lg:justify-center items-center gap-[80px] py-[50px]'>
        <div className='flex items-center'>
              <img src="src/assets/images/IMAGE (27).png" />
              <div>
                 <p className='text-[#6E7191] lg:uppercase'>clients</p>
                 <h2 className='lg:text-[28px] sm:text-[18px] font-[700]'>3,480+</h2>
              </div>
        </div>

        <div className='flex items-center'>
              <img src="src/assets/images/IMAGE (28).png" />
              <div>
                 <p className='text-[#6E7191] lg:uppercase'>clients</p>
                 <h2 className='lg:text-[28px] sm:text-[18px] font-[700]'>3,480+</h2>
              </div>
        </div>

        <div className='lg:flex items-center sm:hidden'>
              <img src="src/assets/images/IMAGE (29).png" />
              <div>
                 <p className='text-[#6E7191] lg:uppercase'>clients</p>
                 <h2 className='lg:text-[28px] sm:text-[18px] font-[700]'>3,480+</h2>
              </div>
        </div>
        </div>

       <div className='flex justify-center '>
       <img src="src/assets/images/Frame (8).png" alt="" />
       </div>
      </section>

      <hr className='lg:mx-[110px] sm:mx-[12px]' />


      {/* section  */}
      <section className='lg:py-[150px] sm:py-[50px] lg:px-[114px] sm:px-[24px]'>
        <div className='flex lg:justify-between items-center sm:flex-wrap'>
          <h1 className='lg:text-[48px] lg:w-[500px] font-[700] lg:text-start sm:text-center sm:text-[40px]'>Take a look at our professional services</h1>
          <Button btn={"Explore services"} mystyle={"bg-[#fff] text-[black] border-[2px] lg:px-[28px] lg:py-[14px] sm:px-[25px] sm:py-[12px] lg:mt-[0] sm:mt-[20px]"}/>
        </div>
        <div className='flex lg:justify-center gap-[58px] sm:flex-wrap py-[62px]'>
          <Card2 img={"src/assets/images/IMAGE (30).png"} h2={"House cleaning"} p={"Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est."} stl={"pt-[83px]"}/>
          <Card2 img={"src/assets/images/IMAGE (31).png"}  h2={"House cleaning"} p={"Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est."} stl={"pt-[49px]"}/>
          <Card2 img={"src/assets/images/IMAGE (32).png"}  h2={"House cleaning"} p={"Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est."} stl={"pt-[73px]"}/>
        </div>
      </section>


      {/* section */}
      <section className='lg:px-[110px] lg:py-[110px]'>
        <div className='bg-[#211F54] lg:rounded-[25px] flex lg:justify-between items-center pr-[173px] sm:justify-center'>
          {/* right */}
          <img src="src/assets/images/Group (7).png"/>

          {/* left */}
          <div className='text-white lg:flex flex-col gap-[20px] sm:hidden'>
            <p className='uppercase'>Covid-19 sanitization</p>
            <h1 className='lg:w-[491px] font-[700] lg:text-[40px]'>We follow guidelines to keep you safe from the COVID-19 virus</h1>
            <p className='lg:w-[474px]'>Lobortis mattis odio leo eget mauris met aliquet semper molestie sollicitudin congue massa mauris lectus.</p>
            
            <div className='flex items-center gap-[28px] pt-[40px]'>
            <Button btn={"Get a free quote"} mystyle="lg:px-[38px] lg:py-[26px] sm:px-[25px] sm:py-[12px]"/>
            <div className='flex items-center'>
              <img src="src/assets/icon/IMAGE (2).png" />
              <div className='lg:block sm:hidden'>
                 <p className='text-[#6E7191] lg:uppercase'>Call us now</p>
                 <h2 className='lg:text-[28px] sm:text-[18px] font-[700] text-[white]'>(414) 567 - 2109</h2>
              </div>
            </div>
          </div>

          </div>
        </div>
      </section>


      {/* section */}
      <section>
        
      </section>
    </div>
  )
}

export default App