import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  interface dataProps  {
    title:string,
    list:List[]
  }
  
  interface List {
    subtitle:string,
    desc:string
  }
  
  export function Faq({data,title}:{data:List[],title:string} ) {
    return (
      <div className="pb-32 max-w-3xl mx-auto px-2 md:px-0 ">
        <h1 className="text-3xl md:text-5xl font-bold pb-4 md:pb-6">{title}</h1>
        <Accordion type="single" collapsible className="w-full">
          {data.map((item,index) => (
          <AccordionItem key={index} value={`item-${index+1}`}>
            <AccordionTrigger>{item.subtitle}</AccordionTrigger>
            <AccordionContent>
              {item.desc}
            </AccordionContent>
          </AccordionItem>
          ))}
        </Accordion>
      </div>
    )
  }
  export function Faq2({data,}:{data:dataProps} ) {
    return (
      <div className="pb-32 max-w-3xl mx-auto px-2 md:px-0 ">
        <Accordion type="single" collapsible className="w-full space-y-2">
          {data.list.map((item,index) => (
          <AccordionItem className="bg-white/80 rounded-[30px] border-b-0 px-8 text-black/80  data-[state=open]:bg-white data-[state=open]:text-black" key={index} value={`item-${index+1}`}>
            <AccordionTrigger>{item.subtitle}</AccordionTrigger>
            <AccordionContent>
              {item.desc}
            </AccordionContent>
          </AccordionItem>
          ))}
        </Accordion>
      </div>
    )
  }
  