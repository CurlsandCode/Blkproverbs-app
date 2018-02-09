class CreateProverbs < ActiveRecord::Migration[5.1]
  def change
    create_table :proverbs do |t|
      t.string :content, null:false
      t.string :meaning, null:false
      t.string :source,  null:false

      t.timestamps
    end
  end
end
