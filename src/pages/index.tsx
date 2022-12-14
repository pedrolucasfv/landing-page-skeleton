import Menu from 'components/Menu'
import SectionOne from 'components/SectionOne'
import SectionTwo from 'components/SectionTwo'

export default function Home() {
  return (
    <>
      <Menu section1="inicio" section2="galeria" section3="contato" />
      <SectionOne
        image="/img/image-example.png"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      />
      <SectionTwo
        images={[
          '/img/image-example-slider-1.jpg',
          '/img/image-example-slider-2.jpg',
          '/img/image-example-slider-3.jpg'
        ]}
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s"
      />
    </>
  )
}
