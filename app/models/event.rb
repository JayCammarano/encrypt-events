require 'rbnacl'

class Event < ApplicationRecord
  has_and_belongs_to_many :users

  def self.add_invitees(encrypted_event, invitees) 
    users = []
    invitees.each do |user|        
      name_hash = {username: user}
      new_user = User.where(username: user).first
      users << new_user
    end
    encrypted_event.users = users
    encrypted_event
  end

  # validate date is in the future
  # def decrypt(event_base64, private_key)
  #   # decrypt private_key from Base64 to Unint8Array
  #   # const keyUint8Array = decodeBase64(key);
  #   pkUI8 = Base64.decode64(private_key)
  #   # decrypt event_base64 for object w/ nonce
  #   Base64.decode64(event_base64)
  #   # const messageWithNonceAsUint8Array = decodeBase64(messageWithNonce);
  #   pry
    
  #   # const nonce = messageWithNonceAsUint8Array.slice(0, secretbox.nonceLength);
  #   # const message = messageWithNonceAsUint8Array.slice(
  #   #   secretbox.nonceLength,
  #   #   messageWithNonce.length
  #   # );
  
  #   # Decrypt a message, passing in the same nonce we used to encrypt
  #   decrypted_message = secret_box.decrypt(nonce, ciphertext)


  #   # But if the ciphertext has been tampered with:
  #   secret_box.open(nonce, corrupted_ciphertext)
  #   #=> RbNaCl::CryptoError exception is raised.
  #   # Chosen ciphertext attacks are prevented by authentication and constant-time comparisons  end
  
  def encrypt
    
  end
  

end
