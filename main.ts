import { Command } from 'commander';
import { billAll } from './src/modules/order/bill';
import { Order } from './src/modules/order/order';
import { estimate } from './src/modules/time/estimate';

const program = new Command();


program.option('--include-eta', 'Include eta in response aka. problem 2')
program.parse(process.argv);


const options = program.opts();

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

function prompt(): Promise<string> {
    return new Promise((resolve, reject) => {
        readline.on('line', (line: string) => {
            resolve(line);
        })
    })
}

async function run() {
    let [baseDeliveryCost, packages] = [0, 0]
    let [vehicles, maxSpeed, maxWeight] = [0, 0, 0]

    let data = (await prompt()).split(" ");
    baseDeliveryCost = Number(data[0])
    packages = Number(data[1])

    let orders = [];

    for (var i = 0; i < packages; i++) {
        let info = (await prompt()).split(" ");

        let order: Order = {
            id: info[0],
            weight: Number(info[1]),
            distance: Number(info[2]),
            couponCode: info[3]
        }

        orders.push(order);
    }

    if (options.includeEta) {
        let etaInfo = (await prompt()).split(" ");
        vehicles = Number(etaInfo[0])
        maxSpeed = Number(etaInfo[1])
        maxWeight = Number(etaInfo[2])
    }

    let billed = billAll(baseDeliveryCost, orders);

    if (options.includeEta) {
        let estimated = estimate(vehicles, maxSpeed, maxWeight, billed);

        estimated.forEach((x) => {
            console.log(`${x.id} ${x.discount} ${x.total} ${x.eta}`)
        })
        return;
    }

    billed.forEach((x) => {
        console.log(`${x.id} ${x.discount} ${x.total}`)
    })

}


run().then(() => readline.close())


