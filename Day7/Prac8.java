package Day7;

import java.security.*;

import javax.crypto.*;

public class Prac8 {
    // announcing all types of errors in code because code has so many errors
    public static void main(String[] args) throws Exception {
        // Signature sg = Signature.getInstance("SHA256withRSA");

        // select an algorithm for encryption
        KeyPairGenerator kpg = KeyPairGenerator.getInstance("RSA");
        // initialize and select the size of the key (key is algorithm for encryption)
        kpg.initialize(2048);
        // now generate key both public and private
        KeyPair kp = kpg.generateKeyPair();
        // create a public key for encryption
        PublicKey pk = kp.getPublic();
        // create cipher object (does the encryption)
        Cipher c = Cipher.getInstance("RSA/ECB/PKCS1Padding");
        // iniialize: what to do encrypt or decrypt and for encryption we give public
        // key (algorithm)
        c.init(Cipher.ENCRYPT_MODE, pk);
        // data for encryption
        byte[] data = "Hello World".getBytes();
        // add data to cypher object

        // c.update(data); commented it and still works

        // this does the encryption
        byte[] encryptedData = c.doFinal(data); // i added (data) parameter
        // print it
        System.out.println("Encrypted Data");
        System.out.println(new String(encryptedData, "UTF8"));
        // now decryption is done by private key
        PrivateKey sk = kp.getPrivate();
        // again initialize and decrypt using private key
        c.init(Cipher.DECRYPT_MODE, sk);
        // does the decrption
        byte[] decryptedData = c.doFinal(encryptedData);
        // print it
        System.out.println("Decrypted Data");
        System.out.println(new String(decryptedData));

    }

}