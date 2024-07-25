import React, { useCallback, useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation';
import { PlaidLinkOnSuccess, PlaidLinkOptions, usePlaidLink } from 'react-plaid-link';
import { createLinkToken, exchangePublicToken } from '@/lib/actions/user.actions';
import Image from 'next/image';

const PlaidLink = ({user, variant }:PlaidLinkProps) => {
    const router = useRouter();
    const [token, settoken] = useState('');

    useEffect(()=>{
        const getLinkToken = async()=>{
            //get token
            const data = await createLinkToken(user);
            //set token
            settoken(data?.linkToken);
        }
        getLinkToken();
    },[user]);

    const onSuccess = useCallback<PlaidLinkOnSuccess>(async (public_token: string)=>{
        await exchangePublicToken({
            publicToken: public_token,
            user,
        })
        router.push('/');
    }, [user])
    const config: PlaidLinkOptions = {
        token, 
        onSuccess
    }

const { open, ready } = usePlaidLink(config);

  return (
    <>
        {variant==='primary' ? (
            <Button
                onClick={()=>open()}
                disabled={!ready}
                className="plaidlink-primary"
            >
                Connect bank
            </Button>
        ): variant === 'ghost' ?(
            <Button onClick={()=>open()} variant="ghost" className="plaidlink-ghost">
                <Image
                    src="/icons/connect-bank.svg"
                    alt="connect bank"
                    width={24}
                    height={24}
                />
                <p className="hiddenl text-[16px] font-semiboldish text-black-2 xl:block">Connect Bank</p>
            </Button>
        ): variant === 'bankaccount' ?(
            <Button onClick={()=>open()} variant="bankaccount" className="plaidlink-ghost">
                <Image
                    src="/icons/connect-bank.svg"
                    alt="connect bank"
                    width={18}
                    height={18}
                />
                <p className="hiddenl text-15 font-semiboldish text-[#000000] xl:block">Open a Bank Account</p>
            </Button>
        ): variant === 'credit' ?(
            <Button onClick={()=>open()} variant="credit" className="plaidlink-ghost">
                <Image
                    src="/icons/connect-bank.svg"
                    alt="connect bank"
                    width={18}
                    height={18}
                />
                <p className="hiddenl text-15 font-semiboldish text-[#000000] xl:block">Apply for a Credit Card</p>
            </Button>
        ): variant === 'loan/line' ?(
            <Button onClick={()=>open()} variant="loan/line" className="plaidlink-ghost">
                <Image
                    src="/icons/connect-bank.svg"
                    alt="connect bank"
                    width={18}
                    height={18}
                />
                <p className="hiddenl text-15 font-semiboldish text-[#000000] xl:block">Apply for a Loan</p>
            </Button>
        ):(
            <Button onClick={()=>open()} className="plaidlink-default">
                <Image
                    src="/icons/connect-bank.svg"
                    alt="connect bank"
                    width={18}
                    height={18}
                    className="size-[24px] max-md:size-14"
                />
                <p className="text-[16px] font-semiboldish text-black-2 hidden lg:block">Connect Bank</p>
            </Button>
        )
    }
    </>
  )
}

export default PlaidLink