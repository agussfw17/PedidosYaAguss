import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization:
            "Bearer C0lGNerrxPKWAWZdB2x0adZ4FVM3iVdqSWQdSfSL1CrKtjM7WS_aPpyO6OxIWNqkRs1RpeCQKplc8WiTPg6_tPayVbOP-xFh4z3EFjTTaNcTZ8pZfPFKbKhCrnT6YnYx"        
    },
});

