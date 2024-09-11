

export const fetchDBData = async (): Promise<EventData[]> => {

  //Put token here
  const token = ""

  try{
  const res = await fetch("https://data.carinthia.com/api/v4/endpoints/557ea81f-6d65-6476-9e01-d196112514d2?include=image&fields=name,startDate,endDate,description,image.dc:originalUrl,image.caption,image.description,image.thumbnailUrl&token=" + token)

  const data = await res.json()

  return data['@graph'].map((event: { [x: string]: any; name: any; startDate: string; endDate?: string; description: any; image: any[] }) =>
    { 
      const eventData: EventData = {id: event['@id'], name: event.name, startDate: new Date(event.startDate), description: event.description, 
        image: event.image.map((imageData: { [x: string]: any; caption: any; thumbnailUrl: any }) => 
          {
          return{caption: imageData.caption, originalUrl: imageData['dc:originalUrl']}
        })}

      if(event.endDate !== undefined) eventData.endDate = new Date(event.endDate);
        
        
        return eventData;
     })
  } catch(e) {
    throw Error("Veranstaltungen konnten nicht geladen werden")
  }}