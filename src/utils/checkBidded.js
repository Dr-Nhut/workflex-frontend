export default function checkBid(userId, offers) {

    return offers.some(offer => offer.freelancerId === userId);
}