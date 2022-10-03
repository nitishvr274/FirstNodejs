const pricedInfo = data.pricedItinerary

var result = []


for (let key in pricedInfo) {
var tmp = {
"OutboundCarrier":pricedInfo[0].pricingInfo.ticketingAirline,
"OutboundOrigin":"TPA",
"OutboundDestination":"NYC",
"OutboundDepartureDate":"10-10-2022",
"hasInboundFlights": false,
"Price":pricedInfo[key].pricingInfo.baseFare,
"Direct":true,
"PriceSymbol":"USD"
}	
result.push(tmp);
}


