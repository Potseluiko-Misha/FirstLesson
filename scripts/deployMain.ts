import { Address, toNano } from '@ton/core';
import { Main } from '../wrappers/Main';
import { compile, NetworkProvider } from '@ton/blueprint';
import { createKeys } from './utils/keys';

export async function run(provider: NetworkProvider) {
    const main = provider.open(Main.createFromConfig({
        seqno: 0,
        publicKey: (await createKeys()).publicKey, 
        ownerAddress: Address.parse('0QADQ0GGkYjA7dsAeTas0XqLxMLDZovJQRS8N9jkqpE2c_KQ')
    }, 
    
    await compile('Main')));

    await main.sendDeploy(provider.sender(), toNano('0.05'));

    await provider.waitForDeploy(main.address);

    
    // run methods on `main`
}

// 0QADQ0GGkYjA7dsAeTas0XqLxMLDZovJQRS8N9jkqpE2c_KQ