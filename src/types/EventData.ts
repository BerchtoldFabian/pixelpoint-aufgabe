type EventData = {
    id: string,
    name: string
    startDate: Date
    endDate?: Date
    description: string
    image: Image[]
}

type Image = {
    caption?: string
    originalUrl: string
}