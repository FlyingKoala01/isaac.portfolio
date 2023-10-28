import { NextApiRequest, NextApiResponse } from "next";

const visitedLocationsData = [
  { lat: 41.3851, lng: 2.1734, pop: 1e6, name: "Barcelona" },
  { lat: 45.4642, lng: 9.19, pop: 1e6, name: "Milan" },
  { lat: 19.4326, lng: -99.1332, pop: 1e6, name: "Mexico City" },
  { lat: 55.7558, lng: 37.6173, pop: 1e6, name: "Moscow" },
  { lat: 3.139, lng: 101.6869, pop: 1e6, name: "Kuala Lumpur" },
  { lat: 20.5888, lng: -100.3899, pop: 1e6, name: "Queretaro" },
  { lat: 41.9028, lng: 12.4964, pop: 1e6, name: "Rome" },
  { lat: 48.2082, lng: 16.3738, pop: 1e6, name: "Vienna" },
  { lat: 52.3676, lng: 4.9041, pop: 1e6, name: "Amsterdam" },
];

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    res.status(200).json(visitedLocationsData);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
