export default interface PayoutItemized {
    currency: string;
    gross: string;
    fee: string;
    net: string;
    description: string;
    balance_transaction_id: string;
    exchange_rate: number | null;
    automatic_payout_id: string;
    order_id: string;
    payout_date: number;
    created_utc: number;
}
