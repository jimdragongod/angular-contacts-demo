export class Contact {
 constructor(public id: number, // 1
                public name: string, // "张三"
                public telNum: string, // "18900001001"
                public address: string,// "广东省深圳市"
                public email: string,// "123@qq.com"
                public birthday: string,// "1990/10/10";
                public collection: number) { // 0 or 1
    }

    public static DUMMY_INSTANCE: Contact  = new Contact(-1,"","","","","",0);

}
